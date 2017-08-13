function divsum(pair)
{
  count = 0;
  
  for(var i = 0; i < pair.length; i++)
    {
      for(var j = 0; j < i; j++)
        {
          var div = pair[i] + pair [j];
          if(div%3 == 0)
            {
              document.write(pair[i]+"+"+pair[j]+" is divisible by 3 "+"<br>");
              count++;
            }
        }
    } 
  return count;
}
document.write(divsum([1,3,2,6,1,2]));