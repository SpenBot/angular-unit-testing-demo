
////////// MODULE /////////////

export class VoteComponent {

    totalVotes = 0;

    upVote() {
      this.totalVotes++;
    }

    downVote() {
      this.totalVotes--;
    }

}




////////// SPEC.TS FILE ///////////

import { VoteComponent } from './vote.component';



describe('VoteComponent', () => {


    it('should increment totalVotes when upvoted', () => {

        let component = new VoteComponent();

        component.upVote();

        expect(component.totalVotes).toBe(1);

    });


    it('should decrement totalVotes when downvoted', () => {

        let component = new VoteComponent();

        component.downVote();

        expect(component.totalVotes).toBe(-1);

    });


});

// arrange
// act
// assert

// describe() defines a suite (a group of related tests)
// it() defines a spec (a test)
// expect() fires the assertion and checks your return values




// END ////////////////////////////
