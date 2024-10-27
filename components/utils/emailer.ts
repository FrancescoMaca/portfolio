
export async function sendEmail(title: string, sender: string, body?: string) {  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.replace(/['"]/g, ''), // optional
        email: sender, // Who sent the email
        message: body?.replace(/['"]/g, ''), // Body of the email, optional
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }

    const data = await response.json();
    return { success: true, id: data.id };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}