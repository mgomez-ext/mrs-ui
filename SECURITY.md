# Security Policy

## Reporting Security Vulnerabilities

The MRS-UI Design System team takes security seriously. If you discover a security vulnerability in this project, please report it responsibly and do not disclose it publicly until we have had an opportunity to address it.

### How to Report

Please email your security report to: **martin.gomez.ext@redsalud.cl**

Include the following information in your report:

- **Description:** A clear explanation of the vulnerability
- **Affected Version(s):** Which version(s) of `@mgomez-ext/mrs-ui` are affected (if known)
- **Steps to Reproduce:** Instructions to reproduce the issue
- **Proof of Concept:** Code samples or screenshots demonstrating the vulnerability
- **Impact:** An explanation of the potential impact and severity
- **Your Contact Information:** So we can follow up with you

### Response & Disclosure Process

We are committed to addressing security vulnerabilities in a timely manner:

- **Initial Response:** We will acknowledge receipt of your report within **48 hours**
- **Investigation:** We will investigate and determine the scope and severity of the vulnerability
- **Resolution:** We will work on a fix and target a patch release
- **Disclosure:** We will coordinate disclosure with you following this timeline:
  - **Critical Issues:** Patched within 7 days, disclosure within 30 days
  - **High Priority:** Patched within 14 days, disclosure within 60 days
  - **Medium Priority:** Patched within 30 days, disclosure within 90 days
  - **Low Priority:** Patched in next regular release, disclosure within 90 days

### Supported Versions

Security updates are provided for the following versions:

| Version | Support Status | Until |
|---------|---|---|
| 1.1.x | ✅ Active Support | Latest maintenance release |
| 1.0.x | ✅ Limited Support | 90 days from 1.1.0 release |
| < 1.0.0 | ❌ Unsupported | - |

Please upgrade to a supported version to receive security updates.

## Security Best Practices

### For Users of MRS-UI

1. **Keep Dependencies Updated:** Regularly update `@mgomez-ext/mrs-ui` and its dependencies
2. **Monitor Advisories:** Subscribe to GitHub security advisories for this repository
3. **Peer Dependencies:** Ensure Material-UI, React, and Emotion are kept up-to-date
4. **CSP Headers:** Implement strong Content Security Policy headers in your application
5. **Input Validation:** Always validate and sanitize user input at application boundaries

### For Contributors

1. **Code Review:** All changes undergo security-focused code review
2. **Dependency Audits:** We run `npm audit` in CI/CD pipelines
3. **Type Safety:** We maintain strict TypeScript to catch type-related bugs
4. **Testing:** We maintain 83%+ test coverage to catch edge cases
5. **Dependabot:** We have automated dependency updates enabled

## Security Scanning

This project uses the following security tools:

- **npm audit:** Scans dependencies for known vulnerabilities
- **Dependabot:** Automated dependency updates for security patches
- **GitHub Actions:** Automated testing and linting on every commit
- **TypeScript:** Strict type checking to prevent common bugs

## Dependencies Security

We use the `overrides` field in `package.json` to enforce security-critical versions:

```json
{
  "overrides": {
    "undici": "^6.23.0",
    "lodash": "^4.17.21",
    "test-exclude": "^7.0.1"
  }
}
```

This ensures that even transitive dependencies meet our security requirements.

## Thank You

We appreciate the security community's efforts to help keep MRS-UI and projects built with it safe. Responsible disclosure of security vulnerabilities helps us all.

## Legal

Please do not:
- Attempt to gain unauthorized access to systems
- Test for vulnerabilities in production environments
- Perform social engineering
- Access data beyond what's necessary to understand the vulnerability

## Contact

- **Security Contact:** martin.gomez.ext@redsalud.cl
- **GitHub Issues:** Please do NOT use GitHub Issues for security reports
- **GitHub Discussions:** Please do NOT use GitHub Discussions for security reports

---

**Last Updated:** January 30, 2026
**Version:** 1.0.0
