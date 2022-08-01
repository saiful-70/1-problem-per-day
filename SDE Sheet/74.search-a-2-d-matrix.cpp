/*
 * @lc app=leetcode id=74 lang=cpp
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // int index = false, row = matrix.size(), col = matrix[0].size();
        // for(int i=0;i<row;i++) {
        //     if(matrix[i][col-1]>= target) {
        //         for(int j=col-1; j>=0; j--) {
        //             if(matrix[i][j] == target) {
        //                 index = true;
        //                 break;
        //             }
        //         }
        //         if(index) break;
        //     }
        // }
        // return index;

        // binary search solution
        int index = false, row = matrix.size(), col = matrix[0].size();
        for(int i=0;i<row;i++) {
            if(matrix[i][col-1]>= target) {
                int low=0, high = col-1;
                while(low<=high) {
                    int mid = (low+high)/2;
                    if(matrix[i][mid] == target) {
                        index = true;
                        break;
                    } else if(target<matrix[i][mid]) {
                        high= mid -1;
                    } else if(target > matrix[i][mid]) {
                        low = mid+1;
                    }
                }
                if(index) break;
                
            }
        }
        return index;

        // efficient will be added later
    }
};
// @lc code=end

