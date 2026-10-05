import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
  },

  header: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#DBEAFE',
    fontSize: 15,
    marginTop: 7,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: -14,
    padding: 20,
    borderRadius: 20,

    elevation: 5,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  formTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 18,
  },

  label: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 7,
    marginTop: 8,
  },

  input: {
    height: 50,

    borderWidth: 1,
    borderColor: '#D1D5DB',

    borderRadius: 12,

    paddingHorizontal: 14,

    backgroundColor: '#F9FAFB',

    color: '#111827',

    fontSize: 15,
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',

    borderRadius: 12,

    overflow: 'hidden',

    backgroundColor: '#F9FAFB',
  },

  picker: {
    height: 52,
    color: '#111827',
  },

  saveButton: {
    height: 52,

    backgroundColor: '#2563EB',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 22,

    elevation: 3,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  cancelButton: {
    height: 48,

    borderWidth: 1,
    borderColor: '#D1D5DB',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
  },

  cancelButtonText: {
    color: '#4B5563',
    fontSize: 14,
    fontWeight: '700',
  },

  listHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 18,

    marginTop: 25,

    marginBottom: 12,
  },

  listTitle: {
    flex: 1,

    fontSize: 21,

    fontWeight: '800',

    color: '#111827',
  },

  counter: {
    minWidth: 34,

    height: 34,

    paddingHorizontal: 8,

    borderRadius: 17,

    backgroundColor: '#DBEAFE',

    alignItems: 'center',

    justifyContent: 'center',
  },

  counterText: {
    color: '#1D4ED8',
    fontWeight: '800',
  },

  list: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    padding: 17,

    marginBottom: 14,

    elevation: 3,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.09,

    shadowRadius: 5,
  },

  cardHeader: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  avatar: {
    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor: '#DBEAFE',

    alignItems: 'center',

    justifyContent: 'center',
  },

  avatarText: {
    color: '#1D4ED8',

    fontSize: 21,

    fontWeight: '800',
  },

  cardTitleArea: {
    flex: 1,

    marginLeft: 13,
  },

  cardTitle: {
    color: '#111827',

    fontSize: 18,

    fontWeight: '800',
  },

  cardSubtitle: {
    color: '#6B7280',

    fontSize: 13,

    marginTop: 3,
  },

  infoArea: {
    backgroundColor: '#F9FAFB',

    borderRadius: 12,

    padding: 12,

    marginTop: 14,
  },

  infoText: {
    color: '#4B5563',

    fontSize: 14,

    marginBottom: 5,
  },

  buttonsArea: {
    flexDirection: 'row',

    gap: 10,

    marginTop: 14,
  },

  editButton: {
    flex: 1,

    height: 44,

    borderRadius: 10,

    backgroundColor: '#0EA5E9',

    alignItems: 'center',

    justifyContent: 'center',
  },

  deleteButton: {
    flex: 1,

    height: 44,

    borderRadius: 10,

    backgroundColor: '#EF4444',

    alignItems: 'center',

    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',
  },

  emptyBox: {
    marginHorizontal: 16,

    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    padding: 28,

    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 42,

    marginBottom: 10,
  },

  emptyTitle: {
    color: '#111827',

    fontSize: 17,

    fontWeight: '800',
  },

  emptyText: {
    color: '#6B7280',

    fontSize: 14,

    textAlign: 'center',

    lineHeight: 21,

    marginTop: 7,
  },

  footer: {
    alignItems: 'center',

    paddingVertical: 25,
  },

  footerText: {
    color: '#9CA3AF',

    fontSize: 12,
  },

});

export default styles;