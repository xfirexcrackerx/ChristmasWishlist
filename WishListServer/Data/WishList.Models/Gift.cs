using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WishList.Models.BaseEnetity;

namespace WishList.Models
{
    public class Gift : DeletableEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string ImageUrl { get; set; }
        public int WishListId { get; set; }
        public virtual WishList WishList { get; set; }
    }
}
