//Program to print the name of the person  who have the age as that  input from the user



let person = [
	{
		name:'Alice',
		age:20
	},
	{
		name:'Gincy',
		age:22
	},
	{
		name:'Sara',
		age:20
	}
];
const age1 = prompt("Enter the age :");
function getFields(input,field)
{
	var output =[];
  for(var i=0;i<input.length;++i)
  {
  	if(person[i].age== age1)
    {
    		output.push(input[i][field]);
    
    }
    
  }
  return output;
}


	 const result = getFields(person,'name');
   console.log(`The persons with age ${age1} is:`);
   console.log(result);