class CalculatorController
{
	public header: string = 'Welcome!';
	public text: string = 'Use Price & Cost to control your project\'s budget!';
	public tips: string[] = ['be efficient', 'be successful', 'be happy'];

	public signUpNow()
	{
	    window.location.href = "http://www.priceandcost.com";
	}; 
}