using CommonLayer.Models;
using RepositoryLayer.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryLayer.Interfaces
{
    public interface IAddressRL
    {
        public AddressModel AddAddress(AddressModel address);
        public IEnumerable<GetAddressModel> GetAllAddress();
    }
}
