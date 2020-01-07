//cart view 
<Grid container spacing={24}>
<Grid item xs={6} sm={6}>
<CartItems checkout={this.state.checkout}
setCheckout={this.setCheckout}/>
</Grid>
{this.state.checkout &&
<Grid item xs={6} sm={6}>
<Checkout/>
</Grid>}
</Grid>

setCheckout = val =>{
    this.setState({checkout: val})
    }

<Route path="/cart" component={Cart}/>

