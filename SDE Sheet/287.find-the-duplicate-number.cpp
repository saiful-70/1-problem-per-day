/*
 * @lc app=leetcode id=287 lang=cpp
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int n = nums.size();
        vector<int> v(n);
        int number;
        for(int i=0;i<n;i++) {
            v[nums[i]]++;
            if(v[nums[i]] == 2) {
                number = nums[i];
                break;
            }
        }
        // for(auto it : v) {
        //     cout << it  << " ";
        // }
        return number;
    }
};
// @lc code=end

