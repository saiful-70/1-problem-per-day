/*
 * @lc app=leetcode id=75 lang=cpp
 *
 * [75] Sort Colors
 */

// @lc code=start
class Solution {
public:
    void sortColors(vector<int>& nums) {
        // solving with insertion sort
        // int n = nums.size();
        // int j;
        // for(int i=1;i<n;i++) {
        //     int value = nums[i];
        //     j = i-1;
        //     while(j>=0 && nums[j]>value) {
        //         nums[j+1] = nums[j];
        //         j--;
        //     }
        //     nums[j+1] = value;
        // }

        int n = nums.size();
        int l=0, m=0, h=n-1;
        // int i=0;
        while(m<=h) {
            if(nums[m]==0) {
                swap(nums[l++], nums[m++]);
            } else if(nums[m]==1){
                m++;
            } else {
                swap(nums[m], nums[h--]);
            }
            // i++;
        }
    }


};
// @lc code=end

