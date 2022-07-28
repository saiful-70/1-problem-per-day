/*
 * @lc app=leetcode id=118 lang=cpp
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> generate(int n) {
        vector<int> v1(1,1);
        vector<int> v2(2,1);
        vector<vector<int>> ans;

        if(n== 1) ans.push_back(v1);
        else if(n==2) {
            ans.push_back(v1);
            ans.push_back(v2);
        }
        else {
            vector<int> v3;
            ans.push_back(v1);
            ans.push_back(v2);
            
            for(int i=2;i<n;i++) {
                v3.push_back(1);
                for(int j=1;j<i;j++) {
                    v3.push_back(ans[i-1][j-1] + ans[i-1][j]);
                }
                v3.push_back(1);
                ans.push_back(v3);
                v3.clear();
            }
        }
        return ans;
    }
};
// @lc code=end

