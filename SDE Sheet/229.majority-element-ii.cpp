/*
 * @lc app=leetcode id=229 lang=cpp
 *
 * [229] Majority Element II
 */

// @lc code=start
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int cnt1 =0, cnt2 = 0, el1 = 0, el2 = 0;
        vector<int> res;
        int t = nums.size()/3;
        for(int i=0;i<nums.size();i++) {
            if(nums[i] == el1) {
                cnt1++;
            } else if(nums[i] == el2) {
                cnt2++;
            } else if(cnt1==0) {
                el1 = nums[i];
                cnt1++;
            }else if(cnt2 == 0) {
                el2 = nums[i];
                cnt2++;
            } else {
                cnt1--, cnt2--;
            }
        }
        cnt1 = 0, cnt2 = 0;
        for(int i=0;i<nums.size();i++) {
            if(nums[i] == el1) cnt1++;
            else if(nums[i] == el2) cnt2++;
        }
        if(cnt1>t) res.push_back(el1);
        if(cnt2>t) res.push_back(el2);
        return res;
    }
};
// @lc code=end

