/* 统计html中dom结点数量 */

var map = {};

function printTree(node) {
  var temp_tag = node.nodeName.toLowerCase();
  if (map[temp_tag] != null) map[temp_tag]++;
  else map[temp_tag] = 1;
  if (node.children != null) {

    for (var i = 0; i < node.children.length; i++) {
      printTree(node.children[i]);
    }
  } else {
    return;
  };
}

function count(node) {
  printTree(node);
  count = 0;
  Object.keys(map).forEach(k => {
    console.log(k, ':',map[k])
    count+= map[k];
  });
  console.log('total:', count);
}

count(window.document.body);
