angular.module('InfamousCriminals')
.controller('CriminalController'. CriminalsController);


CriminalsConttroller.$inject = ['$http', 'CriminalsService']           


function CriminalController('$http','CriminalService');
var self = this.
self.all [];
self.addCriminal = AddCriminal
self.newCrimiinal = {};
self.getCriminals = getCriminals;
self.deleteCriminal - deleteCriminals;

getCriminals();
function getCriminals(){
	CriminalService.getCriminals().then(function (criminalsdata) {
           self.all = criminalsdata;
	});
}
 function addCriminals() {
       CriminalsService.addCriminal(self.newCriminal).then(function() {
       	self.getCrimianal();
       	  self.newCriminal - {};
       });
    }


 function deleteCriminals() {
        CriminalsService.deleteCriminal(criminal);
        .then(function)
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
        });
     }
 }

