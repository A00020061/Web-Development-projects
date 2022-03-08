const officeMeeting={
    _free_meeting_time: [10,2,5],
    _meeting_object:'any',
    _meeting_accepted: [],
    _meeting_pending:[],
    _meeting_cancelled: [],
    _meeting_feedback: [],
    get getmeeting_time(){
        return this._free_meeting_time;
    },
    set setmeeting_time(party){
        const {name, time, purpose} = party;
        if (this._free_meeting_time.indexOf(time)!==-1 && this._meeting_object==='any'){
            this._meeting_pending.push(party);
            this._meeting_feedback = `${name}, your appointment can be reviwed by the don`
        }else if(this._meeting_object === purpose.toLowerCase()){
            this._meeting_pending.push(party);
            this._meeting_feedback = `${name}, your appointment can be reviewed by the Elon musk`
        }else{
            this._meeting_feedback = 'your appointment has been cancelled.'
        }
    },
    set approve_meeting(id){
        const previewmeeting = this._meeting_pending.filter((party) =>{
            return party.id ===id;
        })[0];
        this._meeting_accepted.push(previewmeeting);
        this._free_meeting_time.splice(this._free_meeting_time.indexOf(previewmeeting.time),1);
        this._meeting_feedback = `${previewmeeting.name},your meeting has bee accepted.`
    },
    set decline_meeting(id){
        const previewmeeting = this._meeting_pending.filter((party) =>{
            return party.id ===id;
        })[0];
        this._meeting_cancelled.push(previewmeeting.time);
        this._meeting_feedback = `${previewmeeting.name}, your meeting has been cancelled for reason best known to sandeep kumar`
    },
    set cancelling_meeting(id){
        this.previewmeeting = this._meeting_pending.filter((party) =>{
            return party.id===id;
        })[0];
        this._free_meeting_time.push(previewmeeting.time);
        this._meeting_cancelled.push(previewmeeting);
        this._meeting_accepted.splice(previewmeeting,1)
        this._meeting_feedback = `${previewmeeting.name}, Your meeting was canceled by Elon Musk.`

    },
    set requestfreehourcancelation(hr){
        if(this._free_meeting_time.indexOf(hr)!==-1){
            this._free_meeting_time.splice(this._free_meeting_time.indexOf(hr),1)
        }
    }

};
let client_meeting = {name: 'Sandeep', time: 10, purpose: 'Entertainment'};
officeMeeting.setmeeting_time = client_meeting;
officeMeeting.approve_meeting = client_meeting.id;
officeMeeting.decline_meeting = client_meeting.id;
officeMeeting.requestfreehourcancelation = 10
console.log(officeMeeting._free_meeting_time)
console.log(officeMeeting._meeting_feedback);
// console.log(officeMeeting._meeting_feedback);
// console.log(officeMeeting._meeting_pending)
// officeMeeting.setmeeting_time = 2;
// officeMeeting.setmeeting_time = 4;
// console.log(officeMeeting._meeting_feedback);
// console.log(officeMeeting._meeting_pending)