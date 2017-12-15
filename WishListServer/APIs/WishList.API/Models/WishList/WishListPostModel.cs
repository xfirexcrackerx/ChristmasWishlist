using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WishList.API.Models.Gift;

namespace WishList.API.Models.WishList
{
    public class WishListPostModel
    {
        [Required]
        public string Name { get; set; }
    }
}