               
               
                var ulContainer = $("<ol class='tree'></ol>")
                tsRenderFolderStruct(ulContainer, $scope.treeData);
                $element.append(ulContainer);