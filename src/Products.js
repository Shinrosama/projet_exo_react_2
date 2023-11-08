function Products() {

  const productsFromDb = [
    {
    title: "Paillasson",
    price: 20 ,
    isPublished: true,
  },
  {
    title: "Aspirateur",
    price: 340,
    isPublished: true,
  },
  {
    title: "Lampe",
    price: 50,
    isPublished: true,
  },
  {
    title: "Casque vélo",
    price: 60,
    isPublished: true,
  }
  ];

    return (
      <section>
       {productsFromDb.map((product) =>{

        return(
          <article>
            {product.isPublished &&(
              <>
                <h2>{product.title}</h2>
                <p>{product.price} e</p>
                <p>Is published</p>
              </>  
            )}
            
            
          </article>
        )
       })}
      </section>
    );
  }
  
  export default Products;