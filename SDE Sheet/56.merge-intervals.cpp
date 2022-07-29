/*
 * @lc app=leetcode id=56 lang=cpp
 *
 * [56] Merge Intervals
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>> ans;
        vector<int> v;
        sort(intervals.begin(), intervals.end());
        int mx = INT_MIN, mn = INT_MAX;

        v = intervals[0]; 
        for(auto it : intervals) {
            if(it[0] <= v[1]) {
                v[1] = max(v[1], it[1]);
            } else {
                ans.push_back(v);
                v = it;
            }
        }
        ans.push_back(v);
        return ans;
    }
};
// @lc code=end

