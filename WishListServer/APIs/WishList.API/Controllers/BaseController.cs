using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WishList.Data;

namespace WishList.API.Controllers
{
    public class BaseController : ApiController
    {
        protected IUowData Data;

        public BaseController(IUowData data)
        {
            this.Data = data;
        }

        public BaseController()
            : this(new UowData())
        {
        }
    }
}
