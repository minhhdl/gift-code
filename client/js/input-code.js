(function(){
	'use strict';
	var appCode = angular.module('giftCode', []);
	    
	    appCode.controller('AddCtrl', function($scope, GiftCode, Link){
	      $scope.giftCode = {};
	      $scope.giftCodes = GiftCode.find();
	      $scope.addCode = function(){
	        GiftCode.upsert($scope.giftCode, function(code){
	          $scope.giftCode = {};
	          $scope.giftCodes = GiftCode.find();
	        })
	      }
	      
	      Link.findById({id: 1},function(link){
      		$scope.link = link;
		$scope.changeLink = function(){
	      		Link.upsert($scope.link, function(link){
	      			alert('Change link successful!')
	      		})
      		}
	      }, function(err){
	      	$scope.link = {};	
		$scope.changeLink = function(){
	      		Link.upsert($scope.link, function(link){
	      			alert('Change link successful!')
	      		})
      		}
	      })
	    })

	    appCode.controller('InputCtrl', function($scope, GiftCode, Link, $location){
	    	Link.findById({id: 1}, function(link){
			$scope.input = '';
		    	$scope.submit = function(){
		    		GiftCode.findOne({filter: {where: {code: $scope.input}}}, function(giftCode){
		    			GiftCode.deleteById({id: giftCode.id}, function(){
		    				alert('Correct code! Please save this link, we\'ve deleted your gift code.\n'+ link.toGo);
		    				window.location.href = link.toGo;
		    				$scope.input='';
		    			})
		    		}, function(err){
		    			alert('Error! Please try again.')
		    		})
		    	}
	    	});
	    })
})();
