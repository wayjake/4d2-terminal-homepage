import React from 'react';
import Terminal from 'terminal-in-react';

const HelpText = (props) => {
  const {text, disabled} = props
  const color = disabled ? 'grey' : 'inherit'
  return (
    <div style={{color}}>
      - {text}
    </div>
  )
};

const getRandom42Quote = () => {
  const references = [
    `Alice's Adventures in Wonderland has 42 illustrations.`,
    `In the 1996 film, The Arival, the first message from the aliens was 42 seconds long and possibly contained all of the secrets to life.`,
    `Alice's attempts at multiplication (chapter two of Alice in Wonderland) work if one uses base 18 to write the first answer, and increases the base by threes to 21, 24, etc. (the answers working up to 4 × 12 = "19" in base 39), but "breaks" precisely when one attempts the answer to 4 × 13 in base 42, leading Alice to declare "oh dear! I shall never get to twenty at that rate!"`,
    `Rule Forty-two in Alice's Adventures in Wonderland ("All persons more than a mile high to leave the court").`,
    `Rule 42 of the Code in the preface[21] to The Hunting of the Snark ("No one shall speak to the Man at the Helm").`,
    `In "fit the first" of The Hunting of the Snark the Baker had "forty-two boxes, all carefully packed, With his name painted clearly on each."[21]`,
    `The White Queen announces her age as "one hundred and one, five months and a day", which—if the best possible date is assumed for the action of Through the Looking-Glass (e.g., a date is chosen such that the rollover from February to March is excluded from what would otherwise be an imprecise measurement of "five months and a day")—gives a total of 37,044 days. If the Red Queen, as part of the same chess set, is regarded as the same age, their combined age is 74,088 days, or 42 × 42 × 42`
  ]
  return references[Math.floor(Math.random()*references.length)];
}

const Help = (props) => {
  return (<div>
    Here's a list of commands you can run: <br/><br/>
    (items in grey are disabled) <br/>
    (string delimiters are not required) <br/><br/>
 
    <HelpText text="contact" disabled></HelpText> 
    <HelpText text="contact:sales" disabled></HelpText> 
    <HelpText text="contact:support" disabled></HelpText>
    <HelpText text="view:source" disabled></HelpText> 
    <HelpText text="edit:source (must be on fork)" disabled></HelpText>
    <HelpText text="fork --name(string,required)" disabled></HelpText>
    <HelpText text="4d2"></HelpText>
  </div>)
} 

const FortyTwo = (args) => {
  if (args[1] === '--question'){
    // args example
  }
  return getRandom42Quote()
}

export const App = () => {

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1.3em" }}
          commands={{
            '4d2': () => <FortyTwo />,
            help: () => <Help />,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg={`
            4d2.io
            Serverless infrastructure 

            Pricing:
              - TBD (but what it ends up being, it'll be cheaper than building it yourself)
            
            Easily create a server based on Nodejs:
              - Quick to setup
              - Free monthly CPU
              - Low price for unlimited scale

            Create a new dashboard in React w/ Typescript
              - Start with the drag and drop
              - Never stop customizing with direct access to full HTML DOM

            Run background tasks
              - Your customers don't sleep, neither should your servers
              - Send out tasks based on time. 
              - Configure it in the GUI, even code it there if you'd like
              - All GUI changes are recorded to your Github reposoitry as if they were written and documented by a genious. 
            
            4d2 is a system that simplifies debugging and software production costs by cutting out a lot of the boilerplate that goes into 
            starting a web or mobile app. 




            That's weird, for some reason this is where the help docs stop...
          `}
        />
      </div>
    )
}

/*** Old Home Page 

const HelpText = (props) => {
  const {text, disabled} = props
  const color = disabled ? 'grey' : 'inherit'
  return (
    <div style={{color}}>
      - {text}
    </div>
  )
};

export default class App extends Component {
  showMsg = () => 'Hello World'
  fortyTwo = (args) => {
    if (args[1] === '--question'){
      const question = args.splice(2, args.length).reverse();
      window.open('https://www.google.com/search?q='+question.join(' '), '_blank')
    }
    else{
      const references = [
        `Alice's Adventures in Wonderland has 42 illustrations.`,
        `Alice's attempts at multiplication (chapter two of Alice in Wonderland) work if one uses base 18 to write the first answer, and increases the base by threes to 21, 24, etc. (the answers working up to 4 × 12 = "19" in base 39), but "breaks" precisely when one attempts the answer to 4 × 13 in base 42, leading Alice to declare "oh dear! I shall never get to twenty at that rate!"`,
        `Rule Forty-two in Alice's Adventures in Wonderland ("All persons more than a mile high to leave the court").`,
        `Rule 42 of the Code in the preface[21] to The Hunting of the Snark ("No one shall speak to the Man at the Helm").`,
        `In "fit the first" of The Hunting of the Snark the Baker had "forty-two boxes, all carefully packed, With his name painted clearly on each."[21]`,
        `The White Queen announces her age as "one hundred and one, five months and a day", which—if the best possible date is assumed for the action of Through the Looking-Glass (e.g., a date is chosen such that the rollover from February to March is excluded from what would otherwise be an imprecise measurement of "five months and a day")—gives a total of 37,044 days. If the Red Queen, as part of the same chess set, is regarded as the same age, their combined age is 74,088 days, or 42 × 42 × 42`
      ]
      return references[Math.floor(Math.random()*references.length)];
    }
  }

  help = () => {
    return (
      <div>
      Here's a list of commands you can run: <br/><br/>
      (items in grey are disabled) <br/>
      (string delimiters are not required) <br/><br/>

        <HelpText text="contact" disabled></HelpText> 
        <HelpText text="contact:sales" disabled></HelpText> 
        <HelpText text="contact:support" disabled></HelpText>
        <HelpText text="view:source" disabled></HelpText> 
        <HelpText text="edit:source (must be on fork)" disabled></HelpText>
        <HelpText text="fork --name(string,required)" disabled></HelpText>
        <HelpText text="4d2 --question(string,optional)"></HelpText>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1.3em" }}
          commands={{
            '4d2': this.fortyTwo,
            help: this.help,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg={`
            4d2.io
            Serverless infrastructure 

            Pricing:
              - First $1,000 in billing is free
              - Storage: $0.001/GB/shard
              - Transfer: $0.0001/GB/shard
            
            Single shard guarantee:
              - Quick to setup
              - Easy migration in and out

            3 or more shard Guarantee:
              - All single shard promises
              - 100% uptime <i>SLA</i>
              - 100% data integrity 

            Type HELP for a list of available commands
          `}
        />
      </div>
    );
  }
}

*/