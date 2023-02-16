using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CommonLayer.Models
{
    public class Setaddress
    {
        public string AddressLine { get; set; }
        public long Pincode { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }
}
