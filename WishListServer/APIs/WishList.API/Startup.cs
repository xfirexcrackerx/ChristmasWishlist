using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(WishList.API.Startup))]

namespace WishList.API
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // This server will be accessed by clients from other domains, so
            //  we open up CORS. This needs to be before the call to
            //  .MapSignalR()!
            //
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            // Add SignalR to the OWIN pipeline
            //
            app.MapSignalR();

            // Build up the WebAPI middleware
            //
            //var httpConfig = new HttpConfiguration();

            //httpConfig.MapHttpAttributeRoutes();

            //app.UseWebApi(httpConfig);
            ConfigureAuth(app);
        }
    }
}
