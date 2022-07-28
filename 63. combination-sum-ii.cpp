class Solution {
public:
    void combination(int index, int target, vector<int> candidates, vector<int>& v, vector<vector<int>>& ans) {

      if(target == 0) {
        ans.push_back(v);
        return;
      }

      for(int i=index;i<candidates.size();i++) {
        if(i> index && candidates[i]==candidates[i-1]) continue;
        if(target<candidates[i]) break;
        v.push_back(candidates[i]);
        combination(i+1, target-candidates[i], candidates, v, ans);
        v.pop_back();
      }
    }

    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<vector<int>> ans;
        vector<int> v;
        combination(0, target, candidates, v, ans);
        return ans;
    }
};