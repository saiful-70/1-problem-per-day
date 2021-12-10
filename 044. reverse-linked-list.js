const reverseList = (head) => {
  let current = head;
  const arr = []
  while(current) {
    arr.push(current.val)
    current = current.next
  }
  arr.reverse()
  if(arr.length < 2) {
    return head;
  }
  const reverseList = new ListNode(arr[0])
  current = reverseList
  for(i=1; i<arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return reverseList
}