using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WishList.API.Models.Gift;
using WishList.API.Models.WishList;

namespace WishList.API.Controllers
{
    [Authorize]
    public class WishListsController : BaseController
    {
        public IHttpActionResult Post(WishListPostModel model)
        {
            if (ModelState.IsValid)
            {
                var username = this.User.Identity.Name;
                var user = this.Data.ApplicationUsers.All().FirstOrDefault(x => x.UserName == username);
                user.WishLists.Add(new WishList.Models.WishList()
                {
                    Name = model.Name
                });

                this.Data.SaveChanges();

                return this.Ok(user.WishLists);
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Put([FromBody]WishListPostModel model, int wishListId)
        {
            if (ModelState.IsValid)
            {
                var username = this.User.Identity.Name;
                var user = this.Data.ApplicationUsers.All().FirstOrDefault(x => x.UserName == username);
                if (user.WishLists.Any(x => x.Id == wishListId))
                {
                    var wishList = user.WishLists.FirstOrDefault(x => x.Id == wishListId && !x.Deleted);
                    if (wishList != null)
                    {
                        wishList.Name = model.Name;
                        this.Data.SaveChanges();

                        return this.Ok(wishList);
                    }
                }
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Get()
        {
            if (ModelState.IsValid)
            {
                var username = this.User.Identity.Name;
                var user = this.Data.ApplicationUsers.All().FirstOrDefault(x => x.UserName == username);

                var wishLists = user.WishLists.Where(x => !x.Deleted).Select(x => new WishListGetModel()
                {
                    Id = x.Id,
                    Name = x.Name
                });
                
                return this.Ok(wishLists);
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Get(string type)
        {
            if (ModelState.IsValid)
            {
                var wishLists = this.Data.WishLists.All().Where(x => !x.Deleted).Select(x => new WishListGetModel()
                {
                    Id = x.Id,
                    Name = x.Name
                });

                return this.Ok(wishLists);
            }

            return this.BadRequest("invalid model");

        }

        public IHttpActionResult Delete(int wishListId)
        {
            var wishList = this.Data.WishLists.All().FirstOrDefault(x => !x.Deleted && x.Id == wishListId);
            if (wishList != null)
            {
                    wishList.Deleted = true;
                    this.Data.SaveChanges();
                    return this.Ok(true);
                
            }

            return this.BadRequest("invalid wishList id");
        }
    }
}
