using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WishList.API.Models.Gift
{
    public class GiftViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string ImageUrl { get; set; }
    }
}