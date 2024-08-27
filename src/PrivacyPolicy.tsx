const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 27/08/2024
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to [LinkedIn to VCF]. This Privacy Policy explains how we
        collect, use, and protect your personal data when you use our Chrome
        extension, [LinkedIn to VCF] ("we", "our", or "us").
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        <strong>a. Personally Identifiable Information:</strong>
      </p>
      <ul>
        <li>Name</li>
        <li>Profile picture URL</li>
        <li>Experience details</li>
        <li>Education details</li>
        <li>Licenses and certifications</li>
      </ul>

      <p>
        <strong>b. Website Content:</strong>
      </p>
      <p>
        We use the content extracted from LinkedIn profiles to generate a vCard
        (VCF) file as requested by the user.
      </p>

      <h2>3. How We Use Your Data</h2>
      <p>We use the collected data to:</p>
      <ul>
        <li>
          Generate a vCard (VCF) file based on the LinkedIn profile you are
          viewing.
        </li>
        <li>Provide the downloaded vCard (VCF) file directly to you.</li>
      </ul>

      <h2>4. Data Sharing and Transfers</h2>
      <p>
        <strong>Third Parties:</strong> We do not sell, trade, or transfer your
        data to third parties.
      </p>
      <p>
        <strong>Purpose Limitation:</strong> Data is used only to create the
        vCard (VCF) file and is not used for any other purposes.
      </p>
      <p>
        <strong>No Transfer:</strong> Your data is not used for purposes
        unrelated to the extension's primary function.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable measures to protect your data from unauthorized
        access and misuse. However, no method of transmission over the internet
        or electronic storage is completely secure.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        Data is retained only temporarily and used solely to generate the vCard
        (VCF) file. Once the file is created and provided, the data is not
        stored or retained.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        <strong>Access and Correction:</strong> You may access and correct your
        personal data.
      </p>
      <p>
        <strong>Deletion:</strong> You can request the deletion of any personal
        data we have processed.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. The effective date at
        the top of this policy will be updated to reflect any changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For any questions or concerns about this Privacy Policy or our data
        practices, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> pierrelouisguichard@gmail.com
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    lineHeight: "1.6",
  },
  h1: {
    color: "#333",
  },
  h2: {
    color: "#333",
    marginTop: "20px",
  },
  p: {
    margin: "15px 0",
  },
  ul: {
    margin: "10px 0",
    padding: "0",
    listStyleType: "disc",
    marginLeft: "20px",
  },
};

export default PrivacyPolicy;
