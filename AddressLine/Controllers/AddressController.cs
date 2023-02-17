using BusinessLayer.Interfaces;
using CommonLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using RepositoryLayer.Services;

namespace AddressLine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        IAddressBL addressbl;
        public AddressController(IAddressBL addressbl)
        {
            this.addressbl = addressbl;
        }
        [HttpPost]
        public IActionResult InsertAddress(AddressModel model)
        {
            try
            {
                var address = addressbl.AddAddress(model);
                if (address != null)
                {
                    return this.Ok(new { Success = true, message = "Added successfully", Data = address });
                }
                else
                {
                    return this.BadRequest(new { Success = false, message = "Unable to add" });
                }
            }
            catch (System.Exception e)
            {

                return this.BadRequest(new { Success = false, message = e.Message });
            }
        }
        [HttpGet("AllAddress")]
        public IEnumerable<GetAddressModel> GetAllAddress()
        {
            try
            {
                return addressbl.GetAllAddress();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}