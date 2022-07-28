/*
 * @lc app=leetcode id=31 lang=cpp
 *
 * [31] Next Permutation
 */

// @lc code=start
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size(), a=-1, b;
        for(int i= n-2;i>=0;i--) {
            if(nums[i]<nums[i+1]) {
                a = i;
                break;
            }
        }
        if(a==-1) {
            reverse(nums.begin(), nums.end());
        } else {
            for(int i= n-1;i>=0;i--) {
                if(nums[i]>nums[a]) {
                    b = i;
                    break;
                }
            }
            swap(nums[a], nums[b]);
            reverse(nums.begin()+a+1, nums.end());
        }
    }
};
// @lc code=end

