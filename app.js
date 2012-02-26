// this sets the background color of the
Titanium.UI.setBackgroundColor('#000');

// create tab group                                  
var tabGroup = Titanium.UI.createTabGroup({          
	zIndex: 20,                                      
	anchorPoint: {x: 0, y: 0.5}                      
});                                                  
                                                     
//                                                   
// create base UI tab and root window                
//                                                   
var win1 = Titanium.UI.createWindow({                
    title:'Tab 1',                                   
    backgroundColor:'#fff',                          
    zIndex: 10,                                      
    anchorPoint: {x: 0, y: 0.5},                     
    tabBarHidden: true                               
});                                                  
var tab1 = Titanium.UI.createTab({                   
    icon:'KS_nav_views.png',                         
    title:'Tab 1',                                   
    window:win1                                      
});

var spacer = "";                                                                  
var username = "dezinezync";                                                      
var metaString = 'has created this';                                              
var createdString = ' Label';                                                     
var endString = '. It also auto truncates itself.';                               
		                                                                          
var label1 = Ti.UI.createLabel({                                                  
	color: '444',                                                                 
	text: username,                                                               
	font: {fontFamily: 'Helvetica Neue', fontSize: 12, fontWeight: 'bold'},       
	textAlign: 'left',                                                            
	width: 300,                                                                   
	height: 'auto',                                                               
	top: 20                                                                       
});                                                                               
                                                                                  
	for(var i=0; i < username.length; i++) {                                      
		spacer += "  ";                                                           
	}                                                                             
	                                                                              
	var childLabel1 = Ti.UI.createLabel({                                         
		color: '444',                                                             
		text: spacer + metaString,                                                
		font: {fontFamily: 'Helvetica Neue', fontSize: 12, fontWeight: 'normal'}, 
		textAlign: 'left',                                                        
	});                                                                           
	                                                                              
	for(var i=0; i < (metaString.length - 3); i++) {                              
		spacer += "  ";                                                           
	}
	
	//The 3 in (metaString.length - 3) is an arbitary number which fixed spacing issues for me. Not sure if it is specific to the actual string.                                                                             
	                                                                              
	var childLabel2 = Ti.UI.createLabel({                                         
		color: '444',                                                             
		text: spacer + createdString,                                             
		font: {fontFamily: 'Helvetica Neue', fontSize: 12, fontWeight: 'bold'},   
		textAlign: 'left',                                                        
	});                                                                           
	                                                                              
	for(var i=0; i < ("Label".length); i++) {                                     
		spacer += "  ";                                                           
	}                                                                             
	                                                                              
	var childLabel3 = Ti.UI.createLabel({                                         
		color: '444',                                                             
		text: spacer + endString,                                                 
		font: {fontFamily: 'Helvetica Neue', fontSize: 12, fontWeight: 'normal'}, 
		textAlign: 'left',                                                        
	});                                                                           
	                                                                              
	label1.add(childLabel1);                                                      
	label1.add(childLabel2);                                                      
	label1.add(childLabel3);                                                      
	                                                                              
win1.add(label1);

//                     
//  add tabs           
//                     
tabGroup.addTab(tab1);

// open tab group   
tabGroup.open();