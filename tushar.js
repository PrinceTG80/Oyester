// JavaScript program to count frequencies of array items


function countFreqx(arr, n)
{
	let visited = Array.from({length: n}, (_, i) => false);
	// Traverse through array elements and
	// count frequencies
    let k=10;
    let l=0;
    let m=10;
    let a=0;
	for (let i = 0; i < n; i++) {

		// Skip this element if already processed
		if (visited[i] == true)
			continue;

		// Count frequency
		let count = 1;
		for (let j = i + 1; j < n; j++) {
			if (arr[i] == arr[j]) {
				visited[j] = true;
				count++;
			}
		}
		if(l<count)
        {
            k=arr[i];
            l=count;
        }
        else if(l==count)
        {
            if(k>arr[i])
                k=arr[i];
        }
        if(m>count)
        {
            a=arr[i];
            m=count;
        }
        else if(m==count)
        {
            if(a>arr[i])
                a=arr[i];
        }

    	}
    console.log("["+k+","+a+"]");
}

// Driver Code

	let arrx = [1,1,2,2,4,4,4,4,5];
    let arry = [2,2,2,2,4,4,4,4,5];
    let arrz = [1,2,2,4,4,4,4,5];
	let nx = arrx.length;
    let ny = arry.length;
    let nz = arrz.length;
	countFreqx(arrx, nx);
    countFreqx(arry, ny);
    countFreqx(arrz, nz);
/*Output: 
PS F:\Tushar\Internships\Oyester> node tushar.js
[4,5]
[2,5]
[4,1] */