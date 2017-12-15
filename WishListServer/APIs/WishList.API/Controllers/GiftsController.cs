using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WishList.API.Models.Gift;
using WishList.Models;

namespace WishList.API.Controllers
{
    public class GiftsController : BaseController
    {
        public IHttpActionResult Post(GiftPostModel model)
        {
            if (ModelState.IsValid)
            {
                var username = this.User.Identity.Name;
                var user = this.Data.ApplicationUsers.All().FirstOrDefault(x => x.UserName == username);

                if (user.WishLists.Any(x => x.Id == model.WishListId))
                {
                    var wishList = this.Data.WishLists.All().FirstOrDefault(x => x.Id == model.WishListId && !x.Deleted);

                    if (wishList != null && wishList.Gifts.Count() < 10)
                    {
                        this.Data.Gifts.Add(new Gift()
                        {
                            Name = model.Name,
                            Price = model.Price,
                            ImageUrl = model.ImageUrl,
                            WishListId = model.WishListId
                        });

                        this.Data.SaveChanges();

                        return this.Ok(new { success = true });
                    }
                }
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Get(int wishListId)
        {
            var username = this.User.Identity.Name;
            var user = this.Data.ApplicationUsers.All().FirstOrDefault(x => x.UserName == username);

            if (user.WishLists.Any(x => x.Id == wishListId))
            {
                var wishList = this.Data.WishLists.All().FirstOrDefault(x => x.Id == wishListId && !x.Deleted);

                if (wishList != null)
                {
                    return this.Ok(wishList.Gifts.Select(x => new GiftViewModel()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        ImageUrl = x.ImageUrl,
                        Price = x.Price
                    }));
                }
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Get(int wishListId, string type)
        {
                var wishList = this.Data.WishLists.All().FirstOrDefault(x => x.Id == wishListId && !x.Deleted);

                if (wishList != null)
                {
                    return this.Ok(wishList.Gifts.Select(x => new GiftViewModel()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        ImageUrl = x.ImageUrl,
                        Price = x.Price
                    }));
                }

            return this.BadRequest("error");

        }


        public IHttpActionResult Delete(int giftId)
        {
            var gift = this.Data.Gifts.All().FirstOrDefault(x => !x.Deleted && x.Id == giftId);
            if (gift != null)
            {
                var username = gift.WishList.User.UserName;
                if (username == this.User.Identity.Name || this.User.IsInRole("Admin"))
                {
                    gift.Deleted = true;
                    this.Data.SaveChanges();
                    return this.Ok(true);
                }
            }

            return this.BadRequest("invalid gift id");
        }
    }
}
