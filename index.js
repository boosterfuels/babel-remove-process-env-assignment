module.exports = function () {
  return {
    visitor: {
      AssignmentExpression(path) {
        if (path.node.left.type === 'MemberExpression' &&
            path.node.left.object.type === 'MemberExpression' &&
            path.node.left.object.object.type === 'Identifier' &&
            path.node.left.object.object.name === 'process' &&
            path.node.left.object.property.type === 'Identifier' &&
            path.node.left.object.property.name === 'env') {
          path.remove();
        }
      }
    }
  };
}
