using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.Models {
    static class SampleData {
        public static List<SampleOrder> Orders = new List<SampleOrder>() {
            new SampleOrder {
                OrderID = 10248,
                OrderDate = new DateTime(1996, 7, 4),
                ShipCountry = "France",
                ShipCity = "Reims",
                CustomerName = "Paul Henriot"
            },
            new SampleOrder {
                OrderID = 10249,
                OrderDate = new DateTime(1996, 7, 5),
                ShipCountry = "Germany",
                ShipCity = "Münster",
                CustomerName = "Karin Josephs"
            },
            new SampleOrder {
                OrderID = 10250,
                OrderDate = new DateTime(1996, 7, 8),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Mario Pontes"
            },
            new SampleOrder {
                OrderID = 10251,
                OrderDate = new DateTime(1996, 7, 8),
                ShipCountry = "France",
                ShipCity = "Lyon",
                CustomerName = "Mary Saveley"
            },
            new SampleOrder {
                OrderID = 10252,
                OrderDate = new DateTime(1996, 7, 9),
                ShipCountry = "Belgium",
                ShipCity = "Charleroi",
                CustomerName = "Pascale Cartrain"
            },
            new SampleOrder {
                OrderID = 10253,
                OrderDate = new DateTime(1996, 7, 10),
                ShipCountry = "Brazil",
                ShipCity = "Rio de Janeiro",
                CustomerName = "Mario Pontes"
            },
            new SampleOrder {
                OrderID = 10254,
                OrderDate = new DateTime(1996, 7, 11),
                ShipCountry = "Switzerland",
                ShipCity = "Bern",
                CustomerName = "Yang Wang"
            },
            new SampleOrder {
                OrderID = 10255,
                OrderDate = new DateTime(1996, 7, 12),
                ShipCountry = "Switzerland",
                ShipCity = "Genève",
                CustomerName = "Michael Holz"
            },
            new SampleOrder {
                OrderID = 10256,
                OrderDate = new DateTime(1996, 7, 15),
                ShipCountry = "Brazil",
                ShipCity = "Resende",
                CustomerName = "Paula Parente"
            },
            new SampleOrder {
                OrderID = 10257,
                OrderDate = new DateTime(1996, 7, 16),
                ShipCountry = "Venezuela",
                ShipCity = "San Cristóbal",
                CustomerName = "Carlos Hernández"
            },
            new SampleOrder {
                OrderID = 10258,
                OrderDate = new DateTime(1996, 7, 17),
                ShipCountry = "Austria",
                ShipCity = "Graz",
                CustomerName = "Roland Mendel"
            },
            new SampleOrder {
                OrderID = 10259,
                OrderDate = new DateTime(1996, 7, 18),
                ShipCountry = "Mexico",
                ShipCity = "México D.F.",
                CustomerName = "Francisco Chang"
            }
        };
    }
}
