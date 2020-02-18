module.exports.delayStartBlocker = function(delay){

    return function(minPlayers,maxPlayers,currentPlayers,state){
        if(state.started){
            return undefined;
        }

        if(minPlayers > currentPlayers.length){
            return {message:"Not Enough Players to Start", minPlayers:minPlayers, currentPlayers:currentPlayers.length}
        }

        if(currentPlayers.length >= maxPlayers){
            state.started = true;
            return undefined
        }
        
        if(state.delayCounter == undefined){
            state.delayCounter = delay;
            return {message:"Game will start when : " + state.delayCounter + " becomes 0"}
        }
        else if(state.delayCounter > -1){
            if(state.delayCounter > 0){
                state.delayCounter -=1;
            }
            
            if(state.delayCounter <= 0){
                state.started = true;
                return undefined;
            }
            else{
                return {message:"Game will start when : " + state.delayCounter + " becomes 0.  Current players : " + currentPlayers.length }
            }
        }
    }

}

