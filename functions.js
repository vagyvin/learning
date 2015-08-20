(function(){
	var app= angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products= caps;
	});
	var caps=[
	{
		name: 'cowboy',
		price: 7.99,
		description: 'It is a cowboyhat',
		canPurchase: true,
		soldOut:false,
	},
	{
		name: 'LALakers',
		price: 2,
		description: 'LALakers cap',
		canPurchase: true,
		soldOut:true,
	}
	];
}) ();
