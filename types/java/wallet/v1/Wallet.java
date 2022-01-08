// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: wallet/v1/wallet.proto

package wallet.v1;

public final class Wallet {
  private Wallet() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * <pre>
   * TokenType is the type of keychain.
   * </pre>
   *
   * Protobuf enum {@code wallet.v1.TokenType}
   */
  public enum TokenType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>TOKEN_TYPE_UNSPECIFIED = 0;</code>
     */
    TOKEN_TYPE_UNSPECIFIED(0),
    /**
     * <code>TOKEN_TYPE_SNR = 1;</code>
     */
    TOKEN_TYPE_SNR(1),
    /**
     * <code>TOKEN_TYPE_ETH = 2;</code>
     */
    TOKEN_TYPE_ETH(2),
    /**
     * <code>TOKEN_TYPE_BTC = 3;</code>
     */
    TOKEN_TYPE_BTC(3),
    /**
     * <code>TOKEN_TYPE_SOL = 4;</code>
     */
    TOKEN_TYPE_SOL(4),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>TOKEN_TYPE_UNSPECIFIED = 0;</code>
     */
    public static final int TOKEN_TYPE_UNSPECIFIED_VALUE = 0;
    /**
     * <code>TOKEN_TYPE_SNR = 1;</code>
     */
    public static final int TOKEN_TYPE_SNR_VALUE = 1;
    /**
     * <code>TOKEN_TYPE_ETH = 2;</code>
     */
    public static final int TOKEN_TYPE_ETH_VALUE = 2;
    /**
     * <code>TOKEN_TYPE_BTC = 3;</code>
     */
    public static final int TOKEN_TYPE_BTC_VALUE = 3;
    /**
     * <code>TOKEN_TYPE_SOL = 4;</code>
     */
    public static final int TOKEN_TYPE_SOL_VALUE = 4;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static TokenType valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static TokenType forNumber(int value) {
      switch (value) {
        case 0: return TOKEN_TYPE_UNSPECIFIED;
        case 1: return TOKEN_TYPE_SNR;
        case 2: return TOKEN_TYPE_ETH;
        case 3: return TOKEN_TYPE_BTC;
        case 4: return TOKEN_TYPE_SOL;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<TokenType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        TokenType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<TokenType>() {
            public TokenType findValueByNumber(int number) {
              return TokenType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return wallet.v1.Wallet.getDescriptor().getEnumTypes().get(0);
    }

    private static final TokenType[] VALUES = values();

    public static TokenType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private TokenType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:wallet.v1.TokenType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\026wallet/v1/wallet.proto\022\twallet.v1*w\n\tT" +
      "okenType\022\032\n\026TOKEN_TYPE_UNSPECIFIED\020\000\022\022\n\016" +
      "TOKEN_TYPE_SNR\020\001\022\022\n\016TOKEN_TYPE_ETH\020\002\022\022\n\016" +
      "TOKEN_TYPE_BTC\020\003\022\022\n\016TOKEN_TYPE_SOL\020\004B Z\036" +
      "github.com/sonr-io/core/walletb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
  }

  // @@protoc_insertion_point(outer_class_scope)
}