function Products() {

  const productsFromDb = [
    "Mocassin à glands", "Charantaises", "Talons aiguille"
  ]

    return (
      <section>
       {productsFromDb.map((product) =>{

        return(
          <article>
            <h2>{product}</h2>
          </article>
        )
       })}
      </section>
    );
  }
  
  export default Products;