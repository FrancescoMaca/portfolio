import { PageContent } from "../content-handler";

export const contactPage: PageContent = {
  content: `
// Contact me here while this form is getting created

function createContactForm() {
  const form = document.createElement('form');
  form.id = 'contactForm';

  // Insert your email here
  const email = document.createEmailInput('[[INPUT:email here,email_autogen]]');
  email.id = 'email';
  email.required = true;
  form.appendChild(email);

  // Write your beautiful message below :)
  const message = document.createTitleInput(\`[[INPUT:title here,title_autogen]]\`);
  message.id = 'message';
  message.rows = 5;
  message.required = true;
  form.appendChild(message);

  // The message body is optional, although appriciated
  message.attachBody(\`[[INPUT:message here,message_autogen]]\`)

  //
  // Click here to send your message
  //

  document.createButton('[[ACTION:Send Message,sendMessage]]')
  //                     ^^^^^^^^^^^^

  // Append the form to the container
  document.getElementById('formContainer').appendChild(form);
}

// Call the function to create the form
createContactForm();










const sunset =
\`
            ^^                   @@@@@@@@@
       ^^       ^^            @@@@@@@@@@@@@@      ^^
                            @@@@@@@@@@@@@@@@@@              ^^
                           @@@@@@@@@@@@@@@@@@@@
 ~~~~ ~~ ~~~~~ ~~~~~~~~ ~~ &&&&&&&&&&&&&&&&&&&& ~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~ ~~~ ~~  ~  ~ 
 ~         ~~   ~  ~       ~~~~~~~~~~~~~~~~~~~~ ~       ~~     ~~ ~      ~     ~
   ~      ~~      ~~ ~~ ~~  ~~~~~~~~~~~~~ ~~~~  ~     ~~~    ~ ~~~  ~ ~~   ~
   ~  ~~     ~         ~      ~~~~~~  ~~ ~~~       ~~ ~ ~~  ~~ ~                  ~
 ~  ~       ~ ~      ~          ~~~ ~~~~~~  ~      ~~  ~             ~~    ~
       ~             ~        ~    ~~~      ~~   ~             ~
\`; // I'm not that good, this is from [[URL:[This pretty website],https://www.asciiart.eu/nature/sunset]]
`
};