const merge = (nums1, m, nums2, n) => {
    let i, j=0;
    for(i=m; i<m+n;i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort((a,b) => a-b)
};

console.log(merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3));
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3));