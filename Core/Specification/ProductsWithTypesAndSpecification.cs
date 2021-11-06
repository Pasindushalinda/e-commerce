using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specification
{
    public class ProductsWithTypesAndSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndSpecification()
        {
            AddOnclude(x=>x.ProductType);
            AddOnclude(x=>x.ProductBrand);
        }

        public ProductsWithTypesAndSpecification(int id) : base(x=>x.Id==id)
        {
            AddOnclude(x=>x.ProductType);
            AddOnclude(x=>x.ProductBrand);
        }
    }
}