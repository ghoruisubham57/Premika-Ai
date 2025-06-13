import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

public class AllInOneToolApp extends JFrame {
    private JTextField searchField;
    private DefaultListModel<String> toolListModel;
    private JList<String> toolList;
    private java.util.List<String> tools;

    public AllInOneToolApp() {
        setTitle("🔧 All-In-One Tool App (Talkie UI)");
        setSize(500, 700);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Top Panel with Search
        JPanel topPanel = new JPanel();
        topPanel.setLayout(new BorderLayout());
        topPanel.setBackground(new Color(0, 32, 63));

        JLabel label = new JLabel("🔍 Search Tools: ");
        label.setForeground(Color.WHITE);
        searchField = new JTextField();

        topPanel.add(label, BorderLayout.WEST);
        topPanel.add(searchField, BorderLayout.CENTER);

        add(topPanel, BorderLayout.NORTH);

        // Tool List
        toolListModel = new DefaultListModel<>();
        toolList = new JList<>(toolListModel);
        toolList.setFont(new Font("Arial", Font.PLAIN, 16));
        JScrollPane scrollPane = new JScrollPane(toolList);
        add(scrollPane, BorderLayout.CENTER);

        // Data Setup
        tools = new ArrayList<>();
        for (int i = 1; i <= 70; i++) {
            tools.add("🛠️ Tool " + i);
        }

        updateToolList("");

        // Search Listener
        searchField.addKeyListener(new KeyAdapter() {
            public void keyReleased(KeyEvent e) {
                updateToolList(searchField.getText());
            }
        });

        getContentPane().setBackground(new Color(0, 32, 63));
        setVisible(true);
    }

    private void updateToolList(String query) {
        toolListModel.clear();
        for (String tool : tools) {
            if (tool.toLowerCase().contains(query.toLowerCase())) {
                toolListModel.addElement(tool);
            }
        }
    }

    public static void main(String[] args) {
        new AllInOneToolApp();
    }
}
