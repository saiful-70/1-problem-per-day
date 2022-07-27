class Solution {
public:
    void combination(int index, int n, int target, vector<int>candidates, vector<int> &v,vector<vector<int>>& result) {
      if(index>=n) {
        if(target == 0) result.push_back(v);
        return;
      }
      if(target>candidates[index]) {
        v.push_back(candidates[index]);
        combination(index,n,target-candidates[index], candidates, v, result);
        v.pop_back();
        combination(index+1,n,target, candidates, v, result);
      }
    }

    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> v;
        int n = candidates.size();
        combination(0,n, target, candidates, v, result);
        return result;
    }
};