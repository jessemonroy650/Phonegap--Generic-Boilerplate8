/*
    Date: 2015-12-25
*/

$('#openPlugin').on('click',function() {
    console.log('#openPlugin'); // alert('#openPlugin');
    plugin.test2('#openPlugin');
});

$('#closePlugin').on('click',function() {
    alert('#closePlugin'); // console.log('#closePlugin');
    plugin.test2('#closePlugin');
});

