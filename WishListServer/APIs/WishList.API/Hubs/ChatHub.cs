using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace WishList.API.Hubs
{
    public class ChatHub : Hub
    {
        public void SendMessage(string name, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.receiveMessage(name, message);
        }
    }
}