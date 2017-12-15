using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WishList.API.Models.Gift;

namespace WishList.API.Models.WishList
{
    public class WishListGetModel
    {
        private ICollection<GiftViewModel> gifts;

        public WishListGetModel()
        {
            this.gifts = new HashSet<GiftViewModel>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<GiftViewModel> Gifts
        {
            get
            {
                return this.gifts;
            }
            set
            {
                this.gifts = value;
            }
        }
    }
}