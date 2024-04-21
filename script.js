//your JS code here. If required.
//your JS code here. If required.
function helper(ele)
{
    if(ele.id=="level")
	{
		return 1;
	}
    let arr=ele.children;
	if(arr.length==0)
	{
		return 0;
	}
	let cnt=0;
	for(let  e of arr)
		{
			let tempCnt=helper(e);
			if(tempCnt>0)
			{
				cnt=tempCnt;
				break;
			}
		}
	if(cnt==0) 
	{
		return 0;
	}
	return 1+cnt;
}

let arr=document.body.children;
let result=0;
for(let e of  arr)
{
    let temp=helper(e);
    if(temp>0)
    {
        result=temp;
    }
}
if(result>0)
{
	alert("The level of the element is: "+(2+result));
}
