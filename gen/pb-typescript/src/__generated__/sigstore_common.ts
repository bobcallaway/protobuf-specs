// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v6.30.2
// source: sigstore_common.proto

/* eslint-disable */
import { Timestamp } from "./google/protobuf/timestamp";

/**
 * Only a subset of the secure hash standard algorithms are supported.
 * See <https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf> for more
 * details.
 * UNSPECIFIED SHOULD not be used, primary reason for inclusion is to force
 * any proto JSON serialization to emit the used hash algorithm, as default
 * option is to *omit* the default value of an enum (which is the first
 * value, represented by '0'.
 */
export enum HashAlgorithm {
  HASH_ALGORITHM_UNSPECIFIED = 0,
  SHA2_256 = 1,
  SHA2_384 = 2,
  SHA2_512 = 3,
  SHA3_256 = 4,
  SHA3_384 = 5,
}

export function hashAlgorithmFromJSON(object: any): HashAlgorithm {
  switch (object) {
    case 0:
    case "HASH_ALGORITHM_UNSPECIFIED":
      return HashAlgorithm.HASH_ALGORITHM_UNSPECIFIED;
    case 1:
    case "SHA2_256":
      return HashAlgorithm.SHA2_256;
    case 2:
    case "SHA2_384":
      return HashAlgorithm.SHA2_384;
    case 3:
    case "SHA2_512":
      return HashAlgorithm.SHA2_512;
    case 4:
    case "SHA3_256":
      return HashAlgorithm.SHA3_256;
    case 5:
    case "SHA3_384":
      return HashAlgorithm.SHA3_384;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum HashAlgorithm");
  }
}

export function hashAlgorithmToJSON(object: HashAlgorithm): string {
  switch (object) {
    case HashAlgorithm.HASH_ALGORITHM_UNSPECIFIED:
      return "HASH_ALGORITHM_UNSPECIFIED";
    case HashAlgorithm.SHA2_256:
      return "SHA2_256";
    case HashAlgorithm.SHA2_384:
      return "SHA2_384";
    case HashAlgorithm.SHA2_512:
      return "SHA2_512";
    case HashAlgorithm.SHA3_256:
      return "SHA3_256";
    case HashAlgorithm.SHA3_384:
      return "SHA3_384";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum HashAlgorithm");
  }
}

/**
 * Details of a specific public key, capturing the the key encoding method,
 * and signature algorithm.
 *
 * PublicKeyDetails captures the public key/hash algorithm combinations
 * recommended in the Sigstore ecosystem.
 *
 * This is modelled as a linear set as we want to provide a small number of
 * opinionated options instead of allowing every possible permutation.
 *
 * Any changes to this enum MUST be reflected in the algorithm registry.
 * See: docs/algorithm-registry.md
 *
 * To avoid the possibility of contradicting formats such as PKCS1 with
 * ED25519 the valid permutations are listed as a linear set instead of a
 * cartesian set (i.e one combined variable instead of two, one for encoding
 * and one for the signature algorithm).
 */
export enum PublicKeyDetails {
  PUBLIC_KEY_DETAILS_UNSPECIFIED = 0,
  /**
   * PKCS1_RSA_PKCS1V5 - RSA
   *
   * @deprecated
   */
  PKCS1_RSA_PKCS1V5 = 1,
  /**
   * PKCS1_RSA_PSS - See RFC8017
   *
   * @deprecated
   */
  PKCS1_RSA_PSS = 2,
  /** @deprecated */
  PKIX_RSA_PKCS1V5 = 3,
  /** @deprecated */
  PKIX_RSA_PSS = 4,
  /** PKIX_RSA_PKCS1V15_2048_SHA256 - RSA public key in PKIX format, PKCS#1v1.5 signature */
  PKIX_RSA_PKCS1V15_2048_SHA256 = 9,
  PKIX_RSA_PKCS1V15_3072_SHA256 = 10,
  PKIX_RSA_PKCS1V15_4096_SHA256 = 11,
  /** PKIX_RSA_PSS_2048_SHA256 - RSA public key in PKIX format, RSASSA-PSS signature */
  PKIX_RSA_PSS_2048_SHA256 = 16,
  PKIX_RSA_PSS_3072_SHA256 = 17,
  PKIX_RSA_PSS_4096_SHA256 = 18,
  /**
   * PKIX_ECDSA_P256_HMAC_SHA_256 - ECDSA
   *
   * @deprecated
   */
  PKIX_ECDSA_P256_HMAC_SHA_256 = 6,
  /** PKIX_ECDSA_P256_SHA_256 - See NIST FIPS 186-4 */
  PKIX_ECDSA_P256_SHA_256 = 5,
  PKIX_ECDSA_P384_SHA_384 = 12,
  PKIX_ECDSA_P521_SHA_512 = 13,
  /** PKIX_ED25519 - Ed 25519 */
  PKIX_ED25519 = 7,
  PKIX_ED25519_PH = 8,
  /**
   * PKIX_ECDSA_P384_SHA_256 - These algorithms are deprecated and should not be used, but they
   * were/are being used by most Sigstore clients implementations.
   *
   * @deprecated
   */
  PKIX_ECDSA_P384_SHA_256 = 19,
  /** @deprecated */
  PKIX_ECDSA_P521_SHA_256 = 20,
  /**
   * LMS_SHA256 - LMS and LM-OTS
   *
   * These keys and signatures may be used by private Sigstore
   * deployments, but are not currently supported by the public
   * good instance.
   *
   * USER WARNING: LMS and LM-OTS are both stateful signature schemes.
   * Using them correctly requires discretion and careful consideration
   * to ensure that individual secret keys are not used more than once.
   * In addition, LM-OTS is a single-use scheme, meaning that it
   * MUST NOT be used for more than one signature per LM-OTS key.
   * If you cannot maintain these invariants, you MUST NOT use these
   * schemes.
   */
  LMS_SHA256 = 14,
  LMOTS_SHA256 = 15,
}

export function publicKeyDetailsFromJSON(object: any): PublicKeyDetails {
  switch (object) {
    case 0:
    case "PUBLIC_KEY_DETAILS_UNSPECIFIED":
      return PublicKeyDetails.PUBLIC_KEY_DETAILS_UNSPECIFIED;
    case 1:
    case "PKCS1_RSA_PKCS1V5":
      return PublicKeyDetails.PKCS1_RSA_PKCS1V5;
    case 2:
    case "PKCS1_RSA_PSS":
      return PublicKeyDetails.PKCS1_RSA_PSS;
    case 3:
    case "PKIX_RSA_PKCS1V5":
      return PublicKeyDetails.PKIX_RSA_PKCS1V5;
    case 4:
    case "PKIX_RSA_PSS":
      return PublicKeyDetails.PKIX_RSA_PSS;
    case 9:
    case "PKIX_RSA_PKCS1V15_2048_SHA256":
      return PublicKeyDetails.PKIX_RSA_PKCS1V15_2048_SHA256;
    case 10:
    case "PKIX_RSA_PKCS1V15_3072_SHA256":
      return PublicKeyDetails.PKIX_RSA_PKCS1V15_3072_SHA256;
    case 11:
    case "PKIX_RSA_PKCS1V15_4096_SHA256":
      return PublicKeyDetails.PKIX_RSA_PKCS1V15_4096_SHA256;
    case 16:
    case "PKIX_RSA_PSS_2048_SHA256":
      return PublicKeyDetails.PKIX_RSA_PSS_2048_SHA256;
    case 17:
    case "PKIX_RSA_PSS_3072_SHA256":
      return PublicKeyDetails.PKIX_RSA_PSS_3072_SHA256;
    case 18:
    case "PKIX_RSA_PSS_4096_SHA256":
      return PublicKeyDetails.PKIX_RSA_PSS_4096_SHA256;
    case 6:
    case "PKIX_ECDSA_P256_HMAC_SHA_256":
      return PublicKeyDetails.PKIX_ECDSA_P256_HMAC_SHA_256;
    case 5:
    case "PKIX_ECDSA_P256_SHA_256":
      return PublicKeyDetails.PKIX_ECDSA_P256_SHA_256;
    case 12:
    case "PKIX_ECDSA_P384_SHA_384":
      return PublicKeyDetails.PKIX_ECDSA_P384_SHA_384;
    case 13:
    case "PKIX_ECDSA_P521_SHA_512":
      return PublicKeyDetails.PKIX_ECDSA_P521_SHA_512;
    case 7:
    case "PKIX_ED25519":
      return PublicKeyDetails.PKIX_ED25519;
    case 8:
    case "PKIX_ED25519_PH":
      return PublicKeyDetails.PKIX_ED25519_PH;
    case 19:
    case "PKIX_ECDSA_P384_SHA_256":
      return PublicKeyDetails.PKIX_ECDSA_P384_SHA_256;
    case 20:
    case "PKIX_ECDSA_P521_SHA_256":
      return PublicKeyDetails.PKIX_ECDSA_P521_SHA_256;
    case 14:
    case "LMS_SHA256":
      return PublicKeyDetails.LMS_SHA256;
    case 15:
    case "LMOTS_SHA256":
      return PublicKeyDetails.LMOTS_SHA256;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PublicKeyDetails");
  }
}

export function publicKeyDetailsToJSON(object: PublicKeyDetails): string {
  switch (object) {
    case PublicKeyDetails.PUBLIC_KEY_DETAILS_UNSPECIFIED:
      return "PUBLIC_KEY_DETAILS_UNSPECIFIED";
    case PublicKeyDetails.PKCS1_RSA_PKCS1V5:
      return "PKCS1_RSA_PKCS1V5";
    case PublicKeyDetails.PKCS1_RSA_PSS:
      return "PKCS1_RSA_PSS";
    case PublicKeyDetails.PKIX_RSA_PKCS1V5:
      return "PKIX_RSA_PKCS1V5";
    case PublicKeyDetails.PKIX_RSA_PSS:
      return "PKIX_RSA_PSS";
    case PublicKeyDetails.PKIX_RSA_PKCS1V15_2048_SHA256:
      return "PKIX_RSA_PKCS1V15_2048_SHA256";
    case PublicKeyDetails.PKIX_RSA_PKCS1V15_3072_SHA256:
      return "PKIX_RSA_PKCS1V15_3072_SHA256";
    case PublicKeyDetails.PKIX_RSA_PKCS1V15_4096_SHA256:
      return "PKIX_RSA_PKCS1V15_4096_SHA256";
    case PublicKeyDetails.PKIX_RSA_PSS_2048_SHA256:
      return "PKIX_RSA_PSS_2048_SHA256";
    case PublicKeyDetails.PKIX_RSA_PSS_3072_SHA256:
      return "PKIX_RSA_PSS_3072_SHA256";
    case PublicKeyDetails.PKIX_RSA_PSS_4096_SHA256:
      return "PKIX_RSA_PSS_4096_SHA256";
    case PublicKeyDetails.PKIX_ECDSA_P256_HMAC_SHA_256:
      return "PKIX_ECDSA_P256_HMAC_SHA_256";
    case PublicKeyDetails.PKIX_ECDSA_P256_SHA_256:
      return "PKIX_ECDSA_P256_SHA_256";
    case PublicKeyDetails.PKIX_ECDSA_P384_SHA_384:
      return "PKIX_ECDSA_P384_SHA_384";
    case PublicKeyDetails.PKIX_ECDSA_P521_SHA_512:
      return "PKIX_ECDSA_P521_SHA_512";
    case PublicKeyDetails.PKIX_ED25519:
      return "PKIX_ED25519";
    case PublicKeyDetails.PKIX_ED25519_PH:
      return "PKIX_ED25519_PH";
    case PublicKeyDetails.PKIX_ECDSA_P384_SHA_256:
      return "PKIX_ECDSA_P384_SHA_256";
    case PublicKeyDetails.PKIX_ECDSA_P521_SHA_256:
      return "PKIX_ECDSA_P521_SHA_256";
    case PublicKeyDetails.LMS_SHA256:
      return "LMS_SHA256";
    case PublicKeyDetails.LMOTS_SHA256:
      return "LMOTS_SHA256";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PublicKeyDetails");
  }
}

export enum SubjectAlternativeNameType {
  SUBJECT_ALTERNATIVE_NAME_TYPE_UNSPECIFIED = 0,
  EMAIL = 1,
  URI = 2,
  /**
   * OTHER_NAME - OID 1.3.6.1.4.1.57264.1.7
   * See https://github.com/sigstore/fulcio/blob/main/docs/oid-info.md#1361415726417--othername-san
   * for more details.
   */
  OTHER_NAME = 3,
}

export function subjectAlternativeNameTypeFromJSON(object: any): SubjectAlternativeNameType {
  switch (object) {
    case 0:
    case "SUBJECT_ALTERNATIVE_NAME_TYPE_UNSPECIFIED":
      return SubjectAlternativeNameType.SUBJECT_ALTERNATIVE_NAME_TYPE_UNSPECIFIED;
    case 1:
    case "EMAIL":
      return SubjectAlternativeNameType.EMAIL;
    case 2:
    case "URI":
      return SubjectAlternativeNameType.URI;
    case 3:
    case "OTHER_NAME":
      return SubjectAlternativeNameType.OTHER_NAME;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SubjectAlternativeNameType");
  }
}

export function subjectAlternativeNameTypeToJSON(object: SubjectAlternativeNameType): string {
  switch (object) {
    case SubjectAlternativeNameType.SUBJECT_ALTERNATIVE_NAME_TYPE_UNSPECIFIED:
      return "SUBJECT_ALTERNATIVE_NAME_TYPE_UNSPECIFIED";
    case SubjectAlternativeNameType.EMAIL:
      return "EMAIL";
    case SubjectAlternativeNameType.URI:
      return "URI";
    case SubjectAlternativeNameType.OTHER_NAME:
      return "OTHER_NAME";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum SubjectAlternativeNameType");
  }
}

/**
 * HashOutput captures a digest of a 'message' (generic octet sequence)
 * and the corresponding hash algorithm used.
 */
export interface HashOutput {
  algorithm: HashAlgorithm;
  /**
   * This is the raw octets of the message digest as computed by
   * the hash algorithm.
   */
  digest: Buffer;
}

/** MessageSignature stores the computed signature over a message. */
export interface MessageSignature {
  /**
   * Message digest can be used to identify the artifact.
   * Clients MUST NOT attempt to use this digest to verify the associated
   * signature; it is intended solely for identification.
   */
  messageDigest:
    | HashOutput
    | undefined;
  /**
   * The raw bytes as returned from the signature algorithm.
   * The signature algorithm (and so the format of the signature bytes)
   * are determined by the contents of the 'verification_material',
   * either a key-pair or a certificate. If using a certificate, the
   * certificate contains the required information on the signature
   * algorithm.
   * When using a key pair, the algorithm MUST be part of the public
   * key, which MUST be communicated out-of-band.
   */
  signature: Buffer;
}

/** LogId captures the identity of a transparency log. */
export interface LogId {
  /** The unique identity of the log, represented by its public key. */
  keyId: Buffer;
}

/** This message holds a RFC 3161 timestamp. */
export interface RFC3161SignedTimestamp {
  /**
   * Signed timestamp is the DER encoded TimeStampResponse.
   * See https://www.rfc-editor.org/rfc/rfc3161.html#section-2.4.2
   */
  signedTimestamp: Buffer;
}

export interface PublicKey {
  /**
   * DER-encoded public key, encoding method is specified by the
   * key_details attribute.
   */
  rawBytes?:
    | Buffer
    | undefined;
  /** Key encoding and signature algorithm to use for this key. */
  keyDetails: PublicKeyDetails;
  /** Optional validity period for this key, *inclusive* of the endpoints. */
  validFor?: TimeRange | undefined;
}

/**
 * PublicKeyIdentifier can be used to identify an (out of band) delivered
 * key, to verify a signature.
 */
export interface PublicKeyIdentifier {
  /**
   * Optional unauthenticated hint on which key to use.
   * The format of the hint must be agreed upon out of band by the
   * signer and the verifiers, and so is not subject to this
   * specification.
   * Example use-case is to specify the public key to use, from a
   * trusted key-ring.
   * Implementors are RECOMMENDED to derive the value from the public
   * key as described in RFC 6962.
   * See: <https://www.rfc-editor.org/rfc/rfc6962#section-3.2>
   */
  hint: string;
}

/** An ASN.1 OBJECT IDENTIFIER */
export interface ObjectIdentifier {
  id: number[];
}

/** An OID and the corresponding (byte) value. */
export interface ObjectIdentifierValuePair {
  oid: ObjectIdentifier | undefined;
  value: Buffer;
}

export interface DistinguishedName {
  organization: string;
  commonName: string;
}

export interface X509Certificate {
  /** DER-encoded X.509 certificate. */
  rawBytes: Buffer;
}

export interface SubjectAlternativeName {
  type: SubjectAlternativeNameType;
  identity?:
    | //
    /**
     * A regular expression describing the expected value for
     * the SAN.
     */
    { $case: "regexp"; regexp: string }
    | //
    /** The exact value to match against. */
    { $case: "value"; value: string }
    | undefined;
}

/**
 * A collection of X.509 certificates.
 *
 * This "chain" can be used in multiple contexts, such as providing a root CA
 * certificate within a TUF root of trust or multiple untrusted certificates for
 * the purpose of chain building.
 */
export interface X509CertificateChain {
  /**
   * One or more DER-encoded certificates.
   *
   * In some contexts (such as `VerificationMaterial.x509_certificate_chain`), this sequence
   * has an imposed order. Unless explicitly specified, there is otherwise no
   * guaranteed order.
   */
  certificates: X509Certificate[];
}

/**
 * The time range is closed and includes both the start and end times,
 * (i.e., [start, end]).
 * End is optional to be able to capture a period that has started but
 * has no known end.
 */
export interface TimeRange {
  start: Date | undefined;
  end?: Date | undefined;
}

export const HashOutput: MessageFns<HashOutput> = {
  fromJSON(object: any): HashOutput {
    return {
      algorithm: isSet(object.algorithm) ? hashAlgorithmFromJSON(object.algorithm) : 0,
      digest: isSet(object.digest) ? Buffer.from(bytesFromBase64(object.digest)) : Buffer.alloc(0),
    };
  },

  toJSON(message: HashOutput): unknown {
    const obj: any = {};
    if (message.algorithm !== 0) {
      obj.algorithm = hashAlgorithmToJSON(message.algorithm);
    }
    if (message.digest.length !== 0) {
      obj.digest = base64FromBytes(message.digest);
    }
    return obj;
  },
};

export const MessageSignature: MessageFns<MessageSignature> = {
  fromJSON(object: any): MessageSignature {
    return {
      messageDigest: isSet(object.messageDigest) ? HashOutput.fromJSON(object.messageDigest) : undefined,
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: MessageSignature): unknown {
    const obj: any = {};
    if (message.messageDigest !== undefined) {
      obj.messageDigest = HashOutput.toJSON(message.messageDigest);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },
};

export const LogId: MessageFns<LogId> = {
  fromJSON(object: any): LogId {
    return { keyId: isSet(object.keyId) ? Buffer.from(bytesFromBase64(object.keyId)) : Buffer.alloc(0) };
  },

  toJSON(message: LogId): unknown {
    const obj: any = {};
    if (message.keyId.length !== 0) {
      obj.keyId = base64FromBytes(message.keyId);
    }
    return obj;
  },
};

export const RFC3161SignedTimestamp: MessageFns<RFC3161SignedTimestamp> = {
  fromJSON(object: any): RFC3161SignedTimestamp {
    return {
      signedTimestamp: isSet(object.signedTimestamp)
        ? Buffer.from(bytesFromBase64(object.signedTimestamp))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: RFC3161SignedTimestamp): unknown {
    const obj: any = {};
    if (message.signedTimestamp.length !== 0) {
      obj.signedTimestamp = base64FromBytes(message.signedTimestamp);
    }
    return obj;
  },
};

export const PublicKey: MessageFns<PublicKey> = {
  fromJSON(object: any): PublicKey {
    return {
      rawBytes: isSet(object.rawBytes) ? Buffer.from(bytesFromBase64(object.rawBytes)) : undefined,
      keyDetails: isSet(object.keyDetails) ? publicKeyDetailsFromJSON(object.keyDetails) : 0,
      validFor: isSet(object.validFor) ? TimeRange.fromJSON(object.validFor) : undefined,
    };
  },

  toJSON(message: PublicKey): unknown {
    const obj: any = {};
    if (message.rawBytes !== undefined) {
      obj.rawBytes = base64FromBytes(message.rawBytes);
    }
    if (message.keyDetails !== 0) {
      obj.keyDetails = publicKeyDetailsToJSON(message.keyDetails);
    }
    if (message.validFor !== undefined) {
      obj.validFor = TimeRange.toJSON(message.validFor);
    }
    return obj;
  },
};

export const PublicKeyIdentifier: MessageFns<PublicKeyIdentifier> = {
  fromJSON(object: any): PublicKeyIdentifier {
    return { hint: isSet(object.hint) ? globalThis.String(object.hint) : "" };
  },

  toJSON(message: PublicKeyIdentifier): unknown {
    const obj: any = {};
    if (message.hint !== "") {
      obj.hint = message.hint;
    }
    return obj;
  },
};

export const ObjectIdentifier: MessageFns<ObjectIdentifier> = {
  fromJSON(object: any): ObjectIdentifier {
    return { id: globalThis.Array.isArray(object?.id) ? object.id.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: ObjectIdentifier): unknown {
    const obj: any = {};
    if (message.id?.length) {
      obj.id = message.id.map((e) => Math.round(e));
    }
    return obj;
  },
};

export const ObjectIdentifierValuePair: MessageFns<ObjectIdentifierValuePair> = {
  fromJSON(object: any): ObjectIdentifierValuePair {
    return {
      oid: isSet(object.oid) ? ObjectIdentifier.fromJSON(object.oid) : undefined,
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: ObjectIdentifierValuePair): unknown {
    const obj: any = {};
    if (message.oid !== undefined) {
      obj.oid = ObjectIdentifier.toJSON(message.oid);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },
};

export const DistinguishedName: MessageFns<DistinguishedName> = {
  fromJSON(object: any): DistinguishedName {
    return {
      organization: isSet(object.organization) ? globalThis.String(object.organization) : "",
      commonName: isSet(object.commonName) ? globalThis.String(object.commonName) : "",
    };
  },

  toJSON(message: DistinguishedName): unknown {
    const obj: any = {};
    if (message.organization !== "") {
      obj.organization = message.organization;
    }
    if (message.commonName !== "") {
      obj.commonName = message.commonName;
    }
    return obj;
  },
};

export const X509Certificate: MessageFns<X509Certificate> = {
  fromJSON(object: any): X509Certificate {
    return { rawBytes: isSet(object.rawBytes) ? Buffer.from(bytesFromBase64(object.rawBytes)) : Buffer.alloc(0) };
  },

  toJSON(message: X509Certificate): unknown {
    const obj: any = {};
    if (message.rawBytes.length !== 0) {
      obj.rawBytes = base64FromBytes(message.rawBytes);
    }
    return obj;
  },
};

export const SubjectAlternativeName: MessageFns<SubjectAlternativeName> = {
  fromJSON(object: any): SubjectAlternativeName {
    return {
      type: isSet(object.type) ? subjectAlternativeNameTypeFromJSON(object.type) : 0,
      identity: isSet(object.regexp)
        ? { $case: "regexp", regexp: globalThis.String(object.regexp) }
        : isSet(object.value)
        ? { $case: "value", value: globalThis.String(object.value) }
        : undefined,
    };
  },

  toJSON(message: SubjectAlternativeName): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = subjectAlternativeNameTypeToJSON(message.type);
    }
    if (message.identity?.$case === "regexp") {
      obj.regexp = message.identity.regexp;
    } else if (message.identity?.$case === "value") {
      obj.value = message.identity.value;
    }
    return obj;
  },
};

export const X509CertificateChain: MessageFns<X509CertificateChain> = {
  fromJSON(object: any): X509CertificateChain {
    return {
      certificates: globalThis.Array.isArray(object?.certificates)
        ? object.certificates.map((e: any) => X509Certificate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: X509CertificateChain): unknown {
    const obj: any = {};
    if (message.certificates?.length) {
      obj.certificates = message.certificates.map((e) => X509Certificate.toJSON(e));
    }
    return obj;
  },
};

export const TimeRange: MessageFns<TimeRange> = {
  fromJSON(object: any): TimeRange {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
    };
  },

  toJSON(message: TimeRange): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = message.start.toISOString();
    }
    if (message.end !== undefined) {
      obj.end = message.end.toISOString();
    }
    return obj;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}
