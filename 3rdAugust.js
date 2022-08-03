// Reference: https://devdojo.com/posandu/consolelog-alternatives-you-didnt-know

const officeObj={
QA:'Chinmay',
APP_DEV:'Sachin',
BACK_DEV:'Vaibhav'
}

const {QA:tester,APP_DEV:flutter_developer,BACK_DEV:backend_developer}=officeObj;


const {log:sachinsLog}=console;

sachinsLog('The app developed by '+flutter_developer+' which backend is managed by '+backend_developer+' and tested by '+tester+'.');

sachinsLog('Printed from sachinsLog')
